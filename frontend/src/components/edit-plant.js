import * as React from "react";
import PencilSquareIcon from "@heroicons/react/24/solid/PencilSquareIcon";
import BookmarkIcon from "@heroicons/react/24/solid/CheckCircleIcon";
import { 
    SvgIcon,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Divider,
    Box,
    Grid,

} from "@mui/material";



export default function EditPlantBox() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange =() => {

  };

  return (
    <div>
      <Button
        startIcon={
          <SvgIcon fontSize="small">
            <PencilSquareIcon />
          </SvgIcon>
        }
        onClick={handleClickOpen}
        variant="contained"
      >
        Edit Plant
      </Button>
      {/* sx={{ pr: "20px", pl: "20px", pt: "5px" }} */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Plant Details</DialogTitle>
        <Divider />
        <DialogContent>
          <Grid sx={{ pt: 2, width:"400px"}}>
            <Grid xs={12} md={6} sx={{ pt: 0 }}>
              <TextField
                fullWidth
                label="Plant ID"
                name="plantId"
                onChange={handleChange}
                // value={values.plantId}
                // disabled
              />
            </Grid>

            <Grid xs={12} md={6} sx={{ pt: 2 }}>
              <TextField
                fullWidth
                label="Plant Name"
                name="plantName"
                onChange={handleChange}
                // value={values.plantName}
              />
            </Grid>
            <Grid xs={12} md={6} sx={{ pt: 2 }}>
              <TextField
                fullWidth
                label="Plant Type"
                name="plantType"
                onChange={handleChange}
                // value={values.plantType}
              />
            </Grid>
            <Grid xs={12} md={6} sx={{ pt: 2 }}>
              <TextField
                fullWidth
                label="Water Consumption (ml per day)"
                name="waterLevel"
                onChange={handleChange}
                type="number"
                //   value={values.waterLevel}
              />
            </Grid>
            <Grid xs={12} md={6} sx={{ pt: 2 }}>
              <TextField
                fullWidth
                label="Fertilizer Consumption (ml per day)"
                name="fertilizerLevel"
                onChange={handleChange}
                type="number"
                //   value={values.fertilizerLevel}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "flex-end" }}>
          <Button
            sx={{ mr: "18px", mb: "10px"}}
            startIcon={
              <SvgIcon fontSize="small">
                <BookmarkIcon />
              </SvgIcon>
            }
            onClick={handleClose}
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
