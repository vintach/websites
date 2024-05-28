import { ImageResponse } from 'next/og';
import { OG } from '@/components/og';
import { getGuide } from 'content/guide/get-guide';

interface Props {
  params: { slug: string; lang: string };
}

export const runtime = 'edge';
export const alt = 'Guide Documentation';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630
};

export default async function Image({ params: { lang, slug } }: Props) {
  const inter = fetch(
    new URL('../../../../../assets/Inter-Regular.ttf', import.meta.url)
  ).then(res => res.arrayBuffer());

  const { title, description } = await getGuide(lang, slug);

  return new ImageResponse(<OG title={title} description={description} />, {
    ...size,
    fonts: [
      {
        name: 'Inter',
        data: await inter,
        style: 'normal'
      }
    ]
  });
}
