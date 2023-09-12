import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@core/atoms";
import { SocialMediaIcons } from "@core/molecules";
import { getLocalStorageItem, setLocalStorageItem } from "@core/storageUtils";
import { Theme, useMediaQuery } from "@core/theme";
import { yupResolver } from "@hookform/resolvers/yup";
import { Layout } from "@core/Layout";
import { BaseSyntheticEvent, FC, ReactNode, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useBooleanState } from "react-use-object-state";
import * as Yup from "yup";

const HAS_SUBMITTED_CONTACT_FORM = "hasSubmittedContactForm";

const useValidation = () => {
  return Yup.object().shape({
    name: Yup.string().required(
      "Please tell me your name so I know what to call you!"
    ),
    email: Yup.string()
      .email("Must be a valid email type dude")
      .required(
        "What good would this be if you don't give me an email to reply to?!"
      ),
    messageField: Yup.string().required(
      "Feel free to keep it short and simple!"
    ),
    access_key: Yup.string().required(),
  });
};

export type ContactFormValues = {
  access_key: string;
  name: string;
  email: string;
  messageField: string;
};

const Contact: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(useValidation()),
  });
  const accessKey = process.env.NEXT_PUBLIC_WEB_FORM_ACCESS_KEY;
  const hasSubmittedContactForm = useBooleanState(false);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  useEffect(() => {
    if (getLocalStorageItem(HAS_SUBMITTED_CONTACT_FORM)) {
      hasSubmittedContactForm.setTrue();
    }
  }, [hasSubmittedContactForm]);

  const onSubmit = async (
    data: ContactFormValues,
    e: BaseSyntheticEvent<object, any, any> | undefined
  ) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setLocalStorageItem(HAS_SUBMITTED_CONTACT_FORM, "true");
          hasSubmittedContactForm.setTrue();
          e?.target.reset();
          reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
        <Stack spacing={2}>
          <Typography variant="h1">Contact Me</Typography>
          <Typography variant="body1">
            If you'd like to talk about an upcoming project, need an extra hand
            on a current one or just want to talk shop, feel free to fill out
            the form below. I'm also reachable on Github, Twitter and LinkedIn
            should you prefer those platforms.
          </Typography>
          <Box mt={2}>
            <SocialMediaIcons />
          </Box>
        </Stack>
        {hasSubmittedContactForm.state ? (
          <Stack spacing={2}>
            <Typography align="center" variant="h2" mt={4}>
              Your form has been successfully submitted! 🎉
            </Typography>
            <Typography align="center" variant="body1">
              I'll get back to you as quickly as I can and look forward to
              chatting soon!
            </Typography>
          </Stack>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" maxWidth="md" spacing={2} mb={8}>
              <input
                {...register("access_key")}
                type="hidden"
                value={accessKey}
              />
              <TextField
                {...register("name")}
                label="Name*"
                error={Boolean(errors.name)}
                helperText={(errors.name?.message as ReactNode) || " "}
              />
              <TextField
                {...register("email")}
                label="Email*"
                error={Boolean(errors.email)}
                helperText={(errors.email?.message as ReactNode) || " "}
              />
              <TextField
                {...register("messageField")}
                label="Message*"
                error={Boolean(errors.messageField)}
                helperText={(errors.messageField?.message as ReactNode) || " "}
                multiline
                rows={4}
              />
              <Box alignSelf={isMobile ? "center" : "left"}>
                <Button variant="contained" size="large" type="submit">
                  Submit
                </Button>
              </Box>
            </Stack>
          </form>
        )}
      </Container>
    </Layout>
  );
};
export default Contact;
