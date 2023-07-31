import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import { ManageMember, ManagementHireRequests, BookList } from '../../components'

const AdminDashboard = () => {
  return (
    <Tabs isFitted isLazy variant="unstyled">
      <TabList>
        <Tab textTransform="capitalize">books</Tab>
        <Tab textTransform="capitalize">members</Tab>
        <Tab textTransform="capitalize">hire requests</Tab>
      </TabList>
      <TabIndicator h="2px" bgColor="primary" />

      <TabPanels pos="relative">
        <TabPanel>
          <BookList />
        </TabPanel>

        <TabPanel>
          <ManageMember />
        </TabPanel>

        <TabPanel>
          <ManagementHireRequests />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default AdminDashboard
