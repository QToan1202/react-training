/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_API_PRODUCTS: string
  readonly VITE_SORT_PRODUCT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
