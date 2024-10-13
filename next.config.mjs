/** @type {import('next').NextConfig} */
const nextConfig = {
     //... other configurations ...
    //  webpack: (config) => {
    //     config.resolve.fallback = {
    //       ...config.resolve.fallback,
    //       regeneratorRuntime: require.resolve('regenerator-runtime'),
    //     };
    //     return config;
    //   },
};

export default nextConfig;
// export default {
//     //... other configurations ...
//     webpack: (config) => {
//       config.resolve.fallback = {
//         ...config.resolve.fallback,
//         regeneratorRuntime: 'regenerator-runtime/runtime',
//       };
//       return config;
//     },
//   };