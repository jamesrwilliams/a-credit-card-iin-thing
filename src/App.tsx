import React from 'react';

import {MantineProvider} from "@mantine/core";

import '@mantine/core/styles.css';

import {Editor} from "./components/Editor";
import {SampleCheckouts} from "./components/SampleCheckouts";
import {GithubBadge} from "./components/GithubBadge";

function App() {
  return (
    <MantineProvider>
      <GithubBadge url={'https://github.com/jamesrwilliams/a-credit-card-iin-thing'} />
      <SampleCheckouts />
      <Editor />
    </MantineProvider>
  );
}

export default App;
