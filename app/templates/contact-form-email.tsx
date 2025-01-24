import {
  Html,
  Head,
  Body,
  Preview,
  Tailwind,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

type ContactFormEmailProps = {
  email: string;
  message: string;
};

const ContactFormEmail = ({ email, message }: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio</Preview>
      <Tailwind>
        <Body className="bg-gray-100 !text-black">
          <Container>
            <Section className="bg-white my-10 px-10 py-4 rounded-md ">
              <Heading className="text-lg leading-tight">
                You received a message from contact form
              </Heading>
              <Text className="font-bold">Email: {email}</Text>
              <Hr />
              <Text>Message: </Text>
              <Text className="mx-20">{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
