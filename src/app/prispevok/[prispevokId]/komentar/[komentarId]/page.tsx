// src/app/prispevok/[id]/komentar/[komentarId]/page.tsx

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export const metadata = { title: `Komentár Príspevku | KapuKakaKiki` };

export default function PostCommentDetail({
  params,
}: {
  params: {
    prispevokId: string;          // This corresponds to prispevokId
    komentarId: string;  // This corresponds to komentarId
  };
}) {
  return (
    <Container>
      <Typography>
        Detail komentáru od {params.komentarId} pri príspevku {params.prispevokId}
      </Typography>
    </Container>
  );
}
