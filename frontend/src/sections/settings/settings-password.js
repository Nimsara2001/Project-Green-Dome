import { useCallback, useState } from 'react';
import {
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
  CardHeader,
  Item,
} from "@mui/material";
import Image from 'next/image';

export const SettingsPassword = () => {
  
  return (
    <Card>
      <CardHeader title="Plant Details" />
      <Divider />
      <CardContent>
        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={15}>

          <Stack spacing={4} sx={{ width:400 }}>
            <Typography variant="h6" color="text.secondary">
              Plant ID : {"P01"}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Plant Type : {"Fruit"}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Water Consumption : {"20"} ml per day
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Fertilizer Consumption : {"15"} ml per day
            </Typography>
          </Stack>

          <Image 
            src="/assets/plant/sad_plant.png" 
            width={200} 
            height={200} 
            alt="Plant Image" />
        </Stack>
      </CardContent>
      <Divider />
    </Card>
  );
};
