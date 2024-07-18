export const seo = {
  title: 'MaxTalk',
  description:
    '生命不息 折腾不止',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://maxtalk.vercel.app/'
      : 'http://localhost:3000'
  ),
} as const
