import { Tabs ,TabList, Tab, TabPanel,TabPanels,useColorModeValue,Image, Box,useTab,useMultiStyleConfig ,Button } from '@chakra-ui/react'
import React from 'react'
export default function TabsExample(){
  function Example() {
    const colors = useColorModeValue(
      ['red.50', 'teal.50', 'blue.50'],
      ['red.900', 'teal.900', 'blue.900'],
    )
    const [tabIndex, setTabIndex] = React.useState(0)
    const bg = colors[tabIndex]
    return (
      <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>
        <TabList>
          <Tab>Red</Tab>
          <Tab>Teal</Tab>
          <Tab>Blue</Tab>
        </TabList>
        <TabPanels p='2rem'>
          <TabPanel>The Primary Colors</TabPanel>
          <TabPanel>Are 1, 2, 3</TabPanel>
          <TabPanel>Red, yellow and blue.</TabPanel>
        </TabPanels>
      </Tabs>
    )
  }
  function ControlledExample() {
    const [tabIndex, setTabIndex] = React.useState(0)
  
    const handleSliderChange = (event) => {
      setTabIndex(parseInt(event.target.value, 10))
    }
  
    const handleTabsChange = (index) => {
      setTabIndex(index)
    }
  
    return (
      <Box>
        <input
          type='range'
          min='0'
          max='2'
          value={tabIndex}
          onChange={handleSliderChange}
        />
  
        <Tabs index={tabIndex} onChange={handleTabsChange}>
          <TabList>
            <Tab>One</Tab>
            <Tab>Two</Tab>
            <Tab>Three</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>Click the tabs or pull the slider around</p>
            </TabPanel>
            <TabPanel>
              <p>Yeah yeah. What&apos;s up?</p>
            </TabPanel>
            <TabPanel>
              <p>Oh, hello there.</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    )
  }

  function CustomTabs() {
    const CustomTab = React.forwardRef((props, ref) => {
      // 1. Reuse the `useTab` hook
      const tabProps = useTab({ ...props, ref })
      const isSelected = !!tabProps['aria-selected']
  
      // 2. Hook into the Tabs `size`, `variant`, props
      const styles = useMultiStyleConfig('Tabs', tabProps)
  
      return (
        <Button __css={styles.tab} {...tabProps}>
          <Box as='span' mr='2'>
            {isSelected ? '😎' : '😐'}
          </Box>
          {tabProps.children}
        </Button>
      )
    })
    CustomTab.displayName = "CustomTab";
    return (
      <Tabs>
        <TabList>
          <CustomTab>One</CustomTab>
          <CustomTab>Two</CustomTab>
        </TabList>
        <TabPanels>
          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
        </TabPanels>
      </Tabs>
    )
  }

  function Example2() {
    // 1. Create the component
    function DataTabs({ data }) {
      return (
        <Tabs>
          <TabList>
            {data.map((tab, index) => (
              <Tab key={index}>{tab.label}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {data.map((tab, index) => (
              <TabPanel p={4} key={index}>
                {tab.content}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      )
    }
  
    // 2. Create an array of data
    const tabData = [
      {
        label: 'Nigerian Jollof',
        content: 'Perhaps the greatest dish ever invented.',
      },
      {
        label: 'Pounded Yam & Egusi',
        content:
          'Perhaps the surest dish ever invented but fills the stomach more than rice.',
      },
    ]
  
    // 3. Pass the props and chill!
    return <DataTabs data={tabData} />
  }
  return (
    <>
      <Tabs  colorScheme="red" variant="line" >
      <TabList>
        <Tab>hoge</Tab>
        <Tab>huga</Tab>
        <Tab>hege</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>hogeone</p>
          <p>hogetwo</p>
          <p>hogethree</p>
        </TabPanel>
        <TabPanel>
          <p>hugaone</p>
          <p>hugatwo</p>
          <p>hugathree</p>
        </TabPanel>
        <TabPanel>
          <p>hegeone</p>
          <p>hegetwo</p>
          <p>hegethree</p>
        </TabPanel>
      </TabPanels>
      </Tabs>
      <Tabs  colorScheme="green" variant="enclosed" >
      <TabList>
        <Tab>hoge</Tab>
        <Tab>huga</Tab>
        <Tab>hege</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>hogeone</p>
          <p>hogetwo</p>
          <p>hogethree</p>
        </TabPanel>
        <TabPanel>
          <p>hugaone</p>
          <p>hugatwo</p>
          <p>hugathree</p>
        </TabPanel>
        <TabPanel>
          <p>hegeone</p>
          <p>hegetwo</p>
          <p>hegethree</p>
        </TabPanel>
      </TabPanels>
      </Tabs>
      <Tabs  colorScheme="blue" variant="enclosed-colored" >
      <TabList>
        <Tab>hoge</Tab>
        <Tab>huga</Tab>
        <Tab>hege</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>hogeone</p>
          <p>hogetwo</p>
          <p>hogethree</p>
        </TabPanel>
        <TabPanel>
          <p>hugaone</p>
          <p>hugatwo</p>
          <p>hugathree</p>
        </TabPanel>
        <TabPanel>
          <p>hegeone</p>
          <p>hegetwo</p>
          <p>hegethree</p>
        </TabPanel>
      </TabPanels>
      </Tabs>
      <Tabs  colorScheme="yellow" variant="soft-rounded" >
      <TabList>
        <Tab>hoge</Tab>
        <Tab>huga</Tab>
        <Tab>hege</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>hogeone</p>
          <p>hogetwo</p>
          <p>hogethree</p>
        </TabPanel>
        <TabPanel>
          <p>hugaone</p>
          <p>hugatwo</p>
          <p>hugathree</p>
        </TabPanel>
        <TabPanel>
          <p>hegeone</p>
          <p>hegetwo</p>
          <p>hegethree</p>
        </TabPanel>
      </TabPanels>
      </Tabs>
      <Tabs  colorScheme="pink" variant="solid-rounded" >
      <TabList>
        <Tab>hoge</Tab>
        <Tab>huga</Tab>
        <Tab>hege</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>hogeone</p>
          <p>hogetwo</p>
          <p>hogethree</p>
        </TabPanel>
        <TabPanel>
          <p>hugaone</p>
          <p>hugatwo</p>
          <p>hugathree</p>
        </TabPanel>
        <TabPanel>
          <p>hegeone</p>
          <p>hegetwo</p>
          <p>hegethree</p>
        </TabPanel>
      </TabPanels>
      </Tabs>
      <Tabs size='md' variant='enclosed'>
      
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
      </Tabs>

      <Tabs align='end' variant='enclosed'>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs variant='unstyled'>
        <TabList>
            <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>
            <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
      </Tabs>

      <Example />

      <Tabs defaultIndex={1}>
        <TabPanels>
          <TabPanel>
            <Image
              boxSize='200px'
              fit='cover'
              src='https://resizing.flixster.com/wTgvsiM8vNLhCcCH-6ovV8n5z5U=/300x300/v1.bjsyMDkxMzI5O2o7MTgyMDQ7MTIwMDsxMjAwOzkwMA'
              alt="hogehoge"
            />
          </TabPanel>
          <TabPanel>
            <Image
              boxSize='200px'
              fit='cover'
              src='https://vignette.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png/revision/latest?cb=20170716092103'
              alt="hugahuga"
            />
          </TabPanel>
        </TabPanels>
        <TabList>
          <Tab>Naruto</Tab>
          <Tab>Sasuke</Tab>
        </TabList>
      </Tabs>

      <Tabs isManual variant='enclosed'>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Tabs isLazy>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          {/* initially mounted */}
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <ControlledExample />
      <CustomTabs />
      <Example2 />
    </>
  )
}