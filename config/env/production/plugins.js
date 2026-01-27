module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {
          folder: 'strapi-uploads',
          resource_type: 'auto',
          quality: 'auto:best',
          fetch_format: 'auto',
        },
        uploadStream: {
          folder: 'strapi-uploads',
          resource_type: 'auto',
          quality: 'auto:best',
        },
        delete: {},
      },
    },
  },
  "website-builder": {
    enabled: true,
    config: {
      url: env("GH_WEBHOOK_URL"),
      trigger: {
        type: "manual",
      },
      headers: {
        Authorization: env("GH_AUTH_HEADER"),
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: {
        event_type: env("GH_WEBHOOK_EVENT_TYPE"),
        client_payload: {
          target_branch: env("GH_TARGET_BRANCH"),
        },
      },
    },
  },
  "preview-button": {
    enabled: true,
    resolve: "./src/plugins/preview-button",
  },
});
