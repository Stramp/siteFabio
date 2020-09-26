// eslint-disable-next-line @typescript-eslint/no-var-requires
import withPWA from 'next-pwa'

const isProduction = process.env.NODE_ENV === 'production'

export default withPWA({
  pwa: {
    dest: 'public',
    disable: !isProduction
  }
})
