import React from 'react';
import {Editor} from "./components/Editor";

import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
import {SampleCheckouts} from "./components/SampleCheckouts";

function App() {
  return (
    <MantineProvider>
      <SampleCheckouts />
      <Editor />
    </MantineProvider>
  );
}

export default App;
