import {networks} from "../data/rules";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {generateCard} from "../lib/generateCard";
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container, CopyButton,
  Flex,
  Group,
  Input,
  Text, Tooltip
} from "@mantine/core";
import {IconChevronDown, IconRefresh} from '@tabler/icons-react';

interface Inputs {
  brand: string;
  iin: string;
  length: string;
}

export const Editor = () => {

  const {
    register,
    setValue,
    watch,
  } = useForm<Inputs>({
    mode: 'onChange',
    defaultValues: {
      iin: '4111',
      brand: 'visa'
    }
  });

  const [currentNetwork, setCurrentNetwork] = useState(networks['visa']);
  const [binInInn, setInnRange] = useState(false);

  const currentBrandValue = watch('brand');
  const currentBin = watch('iin');
  const currentLength = watch('length');

  useEffect(() => {
    if(currentNetwork.iinRange) {
     // const result = currentNetwork.iinRange.includes(parseInt(currentBin));
     // Is the current BIN start with any of the IIN range values
     const result = currentNetwork.iinRange.filter((range) => currentBin.startsWith(range.toString()));
     setInnRange(!!result.length);
    }
  }, [currentBin]);

  useEffect(() => {
    const selectedNetwork = networks[currentBrandValue];
    setCurrentNetwork(selectedNetwork);
    if(selectedNetwork.iinRange) {
      setValue('iin', selectedNetwork.iinRange[0].toString());
    }
  }, [currentBrandValue]);

  const handleReset = () => {
    const value = currentNetwork.iinRange[0].toString();
    console.log(value);
    setValue('iin', value);
  }

  const outputValue = generateCard(+currentLength, watch('iin'));

  return (
    <Container>
      <h1>Test card details generator</h1>

      <Box mt={'xl'} mb={'md'}>

        <form>

          <Group grow align={'top'}>

          <Input.Wrapper label="Brand">
            <Input
              component="select"
              rightSection={<IconChevronDown size={14} stroke={1.5}/>}
              pointer
              {...register('brand', {})}
            >
              {Object.entries(networks).map(([key, network]) => {
                return (
                  <option key={key} value={key}>
                    {network.label}
                  </option>
                )
              })}
            </Input>
          </Input.Wrapper>

          <Input.Wrapper label={'PAN Length'}>
            <Input
              disabled={currentNetwork.lengths.length === 1}
              component="select"
              {...register('length')}
            >
            { currentNetwork.lengths.map((length, i) => (
              <option value={length}>{ length } digits</option>
            )) }
            </Input>
          </Input.Wrapper>

          <Input.Wrapper
            label="BIN / IIN"
            description={''}
            error={binInInn ? "" : "IIN invalid or outside network range"}
          >
            <Group align={'top'}>
            <Input type={'number'} {...register('iin')} />
              <Tooltip label={`Reset IIN to default "${currentNetwork.iinRange[0]}"`}>
                <ActionIcon
                  onClick={handleReset}
                  aria-label="reset">
                  <IconRefresh size={14} />
                </ActionIcon>
              </Tooltip>

            </Group>
          </Input.Wrapper>

          </Group>

        </form>

      </Box>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Flex align={'center'} justify={'space-between'}>
          <Text size={'xl'} style={{ fontVariantNumeric: 'tabular-nums', fontFamily: 'monospace' }}>
            { outputValue }
          </Text>
          <Button.Group>
            <CopyButton value={outputValue}>
              {({ copied, copy }) => (
                <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
                  {copied ? 'Copied' : 'Copy'}
                </Button>
              )}
            </CopyButton>
          </Button.Group>
        </Flex>
      </Card>

    </Container>
  )
}
