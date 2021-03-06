import * as React from "react";
import * as PropTypes from "prop-types";
import FlyoutContent from "../FlyoutContent";

import ComponentDetail from "components/ComponentDetail";
import * as docEntry from "react-uwp/Flyout/index.doc.json";
import * as readmeText from "!raw!./README.md";

import CodeExample from "components/CodeExample";

import SimpleExample from "./SimpleExample";
import * as SimpleExampleCode from "!raw!./SimpleExample";
import * as SimpleExampleDesc from "!raw!./SimpleExample.md";

export default class Flyout extends React.Component<any, void> {
  static contextTypes = { theme: PropTypes.object };

  render() {
    const {
      location, // tslint:disable-line:no-unused-variable
      params, // tslint:disable-line:no-unused-variable
      route, // tslint:disable-line:no-unused-variable
      router, // tslint:disable-line:no-unused-variable
      routeParams, // tslint:disable-line:no-unused-variable
      routes, // tslint:disable-line:no-unused-variable
      ...attributes // tslint:disable-line:no-unused-variable
    } = this.props;

    return (
      <div>
        <ComponentDetail
          readmeText={readmeText as any}
          docEntry={docEntry}
        >
          <CodeExample
            title="Simple Examples"
            code={SimpleExampleCode as any}
            description={SimpleExampleDesc as any}
            doubleThemeStyle={{ padding: 20 }}
          >
            <SimpleExample />
          </CodeExample>
        </ComponentDetail>
        <FlyoutContent />
      </div>
    );
  }
}
