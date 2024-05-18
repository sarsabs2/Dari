// i18 import
import {NextIntlClientProvider, useMessages} from 'next-intl';
// react import
import {ReactNode} from 'react';
// css import for tailwindcss
import '@/app/[locale]/globals.css';
import 'keen-slider/keen-slider.min.css';

type Props = {
  children: ReactNode;
  params: {locale: string};
};
export default function LocaleLayout({children, params: {locale}}: Props) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <head>
        <title>mainApp</title>
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
