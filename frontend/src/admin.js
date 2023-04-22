import React from 'react';
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material';
import { Driver } from './sections/overview/driver';
import {Graph} from './sections/overview/graph';
import { Id } from './sections/overview/id';
import { Riders} from './sections/overview/riders';
import { Pending } from './sections/overview/pending';
import{RidersChart}from './sections/overview/riderschart'
import { fromUnixTime } from 'date-fns';


const now = new Date();

const Page = () => (
  <>
    {/* <Head>
      <title>
        Overview | Devias Kit
      </title>
    </Head> */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={3}
        >
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <Id
              difference={12}
              positive
              sx={{ height: '100%' }}
              value="5"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <Riders
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="16"
            />
          </Grid>
          
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <Driver
              difference={16}
              positive={false}
              sx={{ height: '100%' }}
              value="5"
            />
          </Grid>
          <Grid
            xs={12}
            sm={6}
            lg={3}
          >
            <Pending
             difference={16}
             positive={false}
             sx={{ height: '100%' }}
             value="7"
            />
          </Grid>
          <Grid
            xs={12}
            lg={12}
          >
            <Graph
              chartSeries={[
                {
                  name: 'This year',
                  data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]
                },
                {
                  name: 'Last year',
                  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
          <Grid
            xs={12}
            md={12}
            lg={12}
          >
            <RidersChart
              orders={[
                {
                  id: 'f69f88012978187a6c12897f',
                  ref: 'DEV1049',
                  amount: 30.5,
                  customer: {
                    name: 'Ekaterina Tankova'
                  },
                  createdAt: 1555016400000,
                  status: 'pending'
                },
                {
                  id: '9eaa1c7dd4433f413c308ce2',
                  ref: 'DEV1048',
                  amount: 25.1,
                  customer: {
                    name: 'Cao Yu'
                  },
                  createdAt: 1555016400000,
                  status: 'delivered'
                },
                {
                  id: '01a5230c811bd04996ce7c13',
                  ref: 'DEV1047',
                  amount: 10.99,
                  customer: {
                    name: 'Alexa Richardson'
                  },
                  createdAt: 1554930000000,
                  status: 'refunded'
                },
                {
                  id: '1f4e1bd0a87cea23cdb83d18',
                  ref: 'DEV1046',
                  amount: 96.43,
                  customer: {
                    name: 'Anje Keizer'
                  },
                  createdAt: 1554757200000,
                  status: 'pending'
                },
                {
                  id: '9f974f239d29ede969367103',
                  ref: 'DEV1045',
                  amount: 32.54,
                  customer: {
                    name: 'Clarke Gillebert'
                  },
                  createdAt: 1554670800000,
                  status: 'delivered'
                },
                {
                  id: 'ffc83c1560ec2f66a1c05596',
                  ref: 'DEV1044',
                  amount: 16.76,
                  customer: {
                    name: 'Adam Denisov'
                  },
                  createdAt: 1554670800000,
                  status: 'delivered'
                }
              ]}
              sx={{ height: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);



export default Page;