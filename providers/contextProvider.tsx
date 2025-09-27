import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "./queryProvider";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <QueryProvider>
      <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
        {children}
      </ClerkProvider>
    </QueryProvider>
  );
};
