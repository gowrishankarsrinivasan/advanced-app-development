import { Suspense } from "react";
import PropTypes from "prop-types";
import LoadingSpinner from "./spinning";

const LazyLayout = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Component {...rest} />
    </Suspense>
  );
};

LazyLayout.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default LazyLayout;
