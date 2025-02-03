# my-blog

Code for my personal website at [andre-su.com.br](https://andre-su.com.br/)

- alt link [cf pages](https://blog-andre-su.pages.dev/)

This page was made with [hugo](https://gohugo.io/) using the [hugo-coder](https://github.com/luizdepra/hugo-coder/) theme.

## Inspirations and guides

**Creating a Serverless Blog with Cloudflare and Hugo** by [TheRandomSecurityGuy](https://randomsecurity.dev/posts/serverless-blog/) (a little old...).

**Hugo - Quick start** by [gohugo.io team](https://gohugo.io/getting-started/quick-start/).

**Framework Guides - Hugo** by [cloudflare developers](https://developers.cloudflare.com/pages/framework-guides/deploy-a-hugo-site/) guides.

**My own guides!** by [Andre-Su](https://andre-su.com.br).
> You can find it [here](https://andre-su.com.br/posts/site-sem-servidor/) (pt-BR).
> English version [here](https://andre-su.com.br/en/posts/site-sem-servidor/) (en).

## Building and Deploy

This website was built using Hugo. Oficcial instructions at <https://gohugo.io/getting-started/quick-start/>

### Requirements

- [Install Git](https://git-scm.com/downloads) (if you haven't)
- Clone the repository (with sumodules)
- [Install Hugo](https://gohugo.io/installation/) (Following system especific instructions. On windows, use PowerShell.)

### Building

The website is ready to go on the repository.
If you want to build/deploy it, use `hugo server` for the preview server or `hugo` for building the site bucket folder.
The resulting folder is `/public`.

### Deployment

You can use Github Pages to make the website public.
Use the example workflow xml file at `/.github/workflows/hugo.yml`.

### Additional Deployment Options

Alternatively, you can deploy the website using Cloudflare Pages. Follow the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/get-started) for detailed instructions.

### Continuous Deployment

To set up continuous deployment, you can use the provided GitHub Actions workflow. Ensure you have the following secrets configured in your GitHub repository:

- `CF_API_TOKEN`: Your Cloudflare API token.
- `CF_ACCOUNT_ID`: Your Cloudflare account ID.

The workflow file is located at `/.github/workflows/cf-workers.yml` or `/.github/workflows/hugo.yml` and will automatically build and deploy your site whenever changes are pushed to the repository.

## Licence

All content posted on the website is licenced with CC BY-NC 4.0
[See this](https://github.com/Andre-Su/my-blog/blob/main/LICENCE).
