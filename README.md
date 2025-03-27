# `useApi` starter project
Simplified version of `useApi` hook to seamlessly use OpenApi Generator TS client objects.
## How to use
```shell
npm i
```
```shell
npm run generate:apis
```
```shell
npm run dev
```
An example of `useApi` is in `src/components/MyComponent.tsx`.
It is possible to provide custom Axios configuration within `src/context/OpenApiContext.tsx`.
E.g.
```diff=13
- axiosInstance: axios.create()
+ axiosInstance: axios.create({
+   withCredentials: true,
+   ...
+ })
```
