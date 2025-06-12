# React Native Radio

## Usage

###Basic Example
```tsx
  import { Radio, RadioGroup } from "react-native-radio-components"

  const [activeKey, setActiveKey] = React.useState<number>(0)

  const onSelect = (index: number, value: any) => {
    setActiveKey(index)
  }

  <RadioGroup
    activeKey={activeKey}
    onChange={onSelect}
  >
    <Radio>
      <Text>1</Text>
    </Radio>
    <Radio>
      <Text>2</Text>
    </Radio>
  </RadioGroup>

```