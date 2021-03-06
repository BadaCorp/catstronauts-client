import styled from "@emotion/styled";
import React from "react";
import { Footer, Header } from "../components";
import { unit, widths } from "../styles";

interface LayoutProps {
  fullWidth: boolean;
  children: any;
  grid: string | undefined;
}

/**
 * Layout renders the full page content:
 * with header, Page container and footer
 */
const Layout = ({ fullWidth, children, grid }: LayoutProps) => {
  return (
    <>
      <Header />
      <PageContainer fullWidth={fullWidth} grid="center">
        {children}
      </PageContainer>
      <Footer />
    </>
  );
};

export default Layout;

type PageContainerProps = {
  grid: string | undefined;
  fullWidth: boolean | undefined;
};

/** Layout styled components */
const PageContainer = styled.div((props: PageContainerProps) => ({
  display: "flex",
  justifyContent: props.grid ? "center" : "top",
  flexDirection: props.grid ? "row" : "column",
  flexWrap: "wrap",
  alignSelf: "center",
  flexGrow: 1,
  maxWidth: props.fullWidth ? undefined : `${widths.regularPageWidth}px`,
  width: "100%",
  padding: props.fullWidth ? 0 : unit * 2,
  paddingBottom: unit * 5,
}));
