
// src/app/prispevok/[id]/page.tsx


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = { title: `Detail Príspevku | KapuKakaKiki` };

export default function ProfilDetail({params}: {
  params: {id:string}
}) {

  return (
    <Container>
      <Typography> Detail Príspevku {params.id}</Typography>
    </Container>
  );

}