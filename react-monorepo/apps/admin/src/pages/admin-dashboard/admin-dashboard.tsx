import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'

import { COLORS } from '@react-monorepo/shared/utils'
import { ManageMember, ManagementHireRequests } from '../../layouts'
import { BookList } from '../../layouts/book-list/book-list'

export const AdminDashboard = () => {
  return (
    <Tabs isFitted isLazy variant="unstyled">
      <TabList>
        <Tab textTransform="capitalize">books</Tab>
        <Tab textTransform="capitalize">members</Tab>
        <Tab textTransform="capitalize">hire requests</Tab>
      </TabList>
      <TabIndicator h="2px" bg={COLORS.PRIMARY} />

      <TabPanels>
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
