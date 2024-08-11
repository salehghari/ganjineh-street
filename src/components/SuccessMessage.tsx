import { Alert, Container } from "@mui/material";

interface Props {
  message: string
}

export default function SuccessMessage(props: Props) {
  return (
    <Container className="flex flex-1 items-center justify-center">
      <Alert className="flex gap-2 items-center" severity="success">
        {props.message}
      </Alert>
    </Container>
  )
}
