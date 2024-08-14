import { Container, Divider, Typography } from "@mui/material"

export default function Custom500() {
  return (
    <Container className="flex flex-col items-center h-5/6 mt-8 gap-8">
      <Typography className="max-sm:text-8xl -rotate-90" variant="h3">
        :&#40;
      </Typography>
      <Typography className="max-sm:text-2xl" variant="h3">
        سرور به مشکل خورده، لطفا بعدا امتحان کنید.
      </Typography>
      <Divider className="w-1/3 my-1" />
      <Typography className="max-sm:text-5xl" variant="h3">
        500
      </Typography>
    </Container>
  )
}