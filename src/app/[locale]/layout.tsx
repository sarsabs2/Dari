// i18 import
import {SpeedInsights} from '@vercel/speed-insights/next';
import {NextIntlClientProvider, useMessages} from 'next-intl';
// react import
import {ReactNode} from 'react';
// css import for tailwindcss
import '@/app/[locale]/globals.css';
// keen slider import css
import 'keen-slider/keen-slider.min.css';
import {NavigationBottom2} from '@/components/navbar/navigation.bottom';

type Props = {
  children: ReactNode;
  params: {locale: string};
};
export default function LocaleLayout({children, params: {locale}}: Props) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <title>Dari Assistance</title>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <NavigationBottom2 />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
