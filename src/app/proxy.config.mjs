export default [
    {
      context: [
          '/api/*',
          '/v1/upload/uploadmoviedetails',
          '/v1/*',
          '/api/fetch-movie',
          '/api/comingsoon',
          '/v1/uploaddetails',
          '/v1/list'
      ],
      target: 'https://ripedodo-backend.vercel.app',
      secure: false
    }
  ];