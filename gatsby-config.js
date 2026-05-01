/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* 1. Metadatos del sitio para compartir en WhatsApp/Redes Sociales */
  siteMetadata: {
    title: `✨ Mis XV Años - Scarlet Joseline ✨`,
    description: `Te invito a compartir conmigo este momento tan especial. ¡Haz clic para ver los detalles de mi fiesta!`,
    author: `@katherineflorio`,
    siteUrl: `https://invitation-rose-sigma.vercel.app`,
    image: `/og-image.jpg`, // Imagen en la carpeta /static para la vista previa
  },
  pathPrefix: `/wedding`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    // 'gatsby-plugin-eslint',
    `gatsby-plugin-emotion`,
    'gatsby-optional-chaining',
    /* 2. Configuración del Icono (Favicon) y PWA */
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mis XV Años - Scarlet Joseline`,
        short_name: `XV Scarlet`,
        start_url: `/`,
        background_color: `#fffaf5`, // Color crema de fondo
        theme_color: `#B58D56`, // Dorado de la invitación
        display: `standalone`,
        icon: `src/assets/images/corona-icon.png`, // Tu icono de corona
      },
    },
    'clipboard-copy',
    {
      resolve: 'gatsby-alias-imports',
      options: {
        aliases: {
          '@components': 'src/components',
          '@helpers': 'src/helpers',
          '@pages': 'src/pages',
          '@assets': 'src/assets',
          '@hooks': 'src/hooks',
          '@': 'src',
        },
      },
    },
  ],
};
