declare module '*.md' {
    import type { ComponentType } from 'react'
    const Component: ComponentType
    export const metadata: {
        title: string
        date: string
    }
    export default Component
}
