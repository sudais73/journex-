import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'
import '../../global.css'
import appCss from '../styles.css?url'
import heroImage from '../assets/hero-journex.jpg'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'Journex Language School | Master Languages & Build Connections',
      },
      {
        name: 'description',
        content:
          'Learn English and Arabic with accredited mentors while building rewarding partner networks. Earn Personal Journey Points (PJP) and Team Journey Points (TJP).',
      },
      {
        name: 'keywords',
        content:
          'Journex, English learning, Arabic learning, language school Ethiopia, PJP, TJP, Afaan Oromoo language course',
      },
      // Social Previews (Telegram, WhatsApp, Facebook)
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Journex Language School | Master Languages & Build Connections',
      },
      {
        property: 'og:description',
        content:
          'Interactive English & Arabic courses paired with an innovative network-earning ecosystem.',
      },
      { property: 'og:image', content: heroImage },
      // Twitter Previews
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Journex Language School',
      },
      {
        name: 'twitter:description',
        content:
          'Learn English and Arabic with expert mentors. Earn while you grow.',
      },
      { name: 'twitter:image', content: heroImage },
      { name: 'theme-color', content: '#0047cc' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'apple-touch-icon', href: '/favicon.svg' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}