
// src/app/profil/[id]/page.tsx


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = { title: `Detail Profilu | KapuKakaKiki` };

export default function ProfilDetail({params}: {
  params: {id:string}
}) {

  return (
    <Container>
      <Typography> Detail Profilu {params.id}</Typography>
    </Container>
  );

}