import type { MDXComponents } from 'mdx/types'

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-epitaph text-[#022542] text-[28px] md:text-[34px] uppercase leading-tight mt-8 mb-4">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-epitaph text-[#022542] text-[22px] md:text-[26px] uppercase leading-tight mt-8 mb-3 border-b border-[#e5e5e5] pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-epitaph text-[#04589C] text-[18px] md:text-[20px] uppercase leading-tight mt-6 mb-2">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-[#525252] text-[15px] md:text-[16px] leading-[26px] mb-5">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc ml-6 mb-5 space-y-1">
      {children}
    </ul>
  ),
  li: ({ children }) => (
    <li className="text-[#525252] text-[15px] md:text-[16px] leading-[26px]">
      {children}
    </li>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#022542]">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-[#525252]">{children}</em>
  ),
  hr: () => (
    <hr className="my-8 border-[#e5e5e5]" />
  ),
}

export function useMDXComponents(): MDXComponents {
  return components
}
