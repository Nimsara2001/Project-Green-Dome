import PropTypes from 'prop-types';
import { formatDistanceToNow } from "date-fns";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";

import {
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SvgIcon,
} from "@mui/material";
import { Scrollbar } from 'src/components/scrollbar';


export const OverviewTraffic = (props) => {
  const { products = [], sx } = props;


  return (
    <Card sx={sx}>
      <CardHeader title="Notifications" />
      <Scrollbar
        sx={{
          height: "80%",
          "& .simplebar-content": {
            height: "100%",
          },
          "& .simplebar-scrollbar:before": {
            background: "neutral.400",
          },
        }}
      >
        <List>
          {products.map((product, index) => {
            const hasDivider = index < products.length - 1;
            const ago = formatDistanceToNow(product.updatedAt);

            return (
              <ListItem divider={hasDivider} key={product.id}>
                <ListItemText
                  primary={product.name}
                  primaryTypographyProps={{ variant: "subtitle1" }}
                  secondary={`Updated ${ago} ago`}
                  secondaryTypographyProps={{ variant: "body2" }}
                />
                <IconButton edge="end">
                <SvgIcon>
                  <XCircleIcon/>
                </SvgIcon>
              </IconButton>
              </ListItem>
            );
          })}
        </List>
      </Scrollbar>
    </Card>
  );
};

OverviewTraffic.propTypes = {
  products: PropTypes.array,
  sx: PropTypes.object,
};
