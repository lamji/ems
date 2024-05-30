// /* eslint-disable @typescript-eslint/no-explicit-any */
// /** @format */

// import React from 'react';
// import { Button, Box, Typography, Menu, MenuItem, TextField } from '@mui/material';
// import Image from 'next/image';
// import useViewModel from './useViewModel';

// export default function TransferFunds() {
//   const {
//     transferFundsValidation,
//     selectedValue,
//     handleMenuItemClick,

//     menuProps,
//     helperPropsFrom,
//     capitalizeWords,
//     handleMenuItemClickTo,
//     helperPropsTo,
//     selectBoxPropsTo,
//     selectedValueTo,
//     menuPropsTo,
//     classes,
//     transferFromMenu,
//     transferToMenu,
//     handleAmountChange,
//     selectedAmount,
//     anchorEl,
//     handleClick,
//   } = useViewModel();

//   return (
//     <div>
//       {/* <Box className="transferFundsBox" {...selectBoxPropsFrom}>
//         {selectedValue ? `${capitalizeWords(selectedValue)}` : 'Transfer From'}
//       </Box> */}
//       <Box
//         className="transferFundsBox"
//         id="basic-button"
//         aria-controls={anchorEl ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={anchorEl ? 'true' : undefined}
//         onClick={(event: any) => handleClick(event)}
//         sx={{
//           ...classes.selectBox,
//           // borderColor: transferFundsValidation?.errors?.transferFrom ? 'error.main' : 'inherit',
//         }}
//       >
//         {selectedValue ? capitalizeWords(selectedValue) : 'Transfer From'}
//       </Box>

//       <Typography className="transferFromHelper" {...helperPropsFrom}>
//         {/* {transferFundsValidation?.errors?.transferFrom} */}
//       </Typography>
//       <Menu className="transferFromMenu" {...menuProps}>
//         {transferFromMenu.map((category, id) => {
//           return (
//             <MenuItem
//               className={`menuItemTransferFrom${category?.label}`}
//               key={id}
//               onClick={() => handleMenuItemClick(category?.label, category.amount)}
//             >
//               <Box sx={classes.imageWrapper}>
//                 <Image
//                   src={category?.icon}
//                   width={20}
//                   height={20}
//                   alt={category}
//                   style={classes.imageStyles}
//                 />
//                 <Typography>{category?.label}</Typography>
//                 <Typography sx={classes.amount}>{formatCurrencyTotal(category?.amount)}</Typography>
//               </Box>
//             </MenuItem>
//           );
//         })}
//       </Menu>

//       <Box className="transferFundsBoxTo" {...selectBoxPropsTo}>
//         {selectedValueTo ? capitalizeWords(selectedValueTo) : 'Transfer To'}
//       </Box>
//       <Typography className="helperPropsTo" {...helperPropsTo}>
//         {transferFundsValidation?.errors?.transferTo}
//       </Typography>
//       <Menu className="transferToMenu" {...menuPropsTo}>
//         {transferToMenu.map((category, id) => {
//           return (
//             <MenuItem
//               className={`transferToMenuItem${category?.label}`}
//               key={id}
//               onClick={() => handleMenuItemClickTo(category?.label, category.amount)}
//             >
//               <Box sx={classes.imageWrapper}>
//                 <Image
//                   src={category?.icon}
//                   width={20}
//                   height={20}
//                   style={classes.imageStyles}
//                   alt={''}
//                 />
//                 <Typography>{category?.label}</Typography>
//                 <Typography sx={classes.amount} color={category.amount === 0 ? 'red' : 'gray'}>
//                   {formatCurrencyTotal(category?.amount)}
//                 </Typography>
//               </Box>
//             </MenuItem>
//           );
//         })}
//       </Menu>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <TextField
//           sx={{ mt: 1, width: '200px' }}
//           id="standard-basic"
//           label="Amount"
//           variant="standard"
//           name="transferAmount"
//           helperText={
//             selectedValue &&
//             `Available balance ${
//               selectedAmount !== null ? formatCurrencyTotal(selectedAmount) : formatCurrencyTotal(0)
//             }`
//           }
//           onChange={(e) => handleAmountChange(e)}
//         />
//         {/* {transferFundsValidation.errors.transferAmount && (
//           <Typography color="error.main" sx={{ fontSize: '12px ' }}>
//             {transferFundsValidation.errors.transferAmount}
//           </Typography>
//         )} */}
//       </Box>

//       <Button
//         className="transferFundsButton"
//         fullWidth
//         color="primary"
//         variant="contained"
//         sx={classes.button}
//         onClick={() => transferFundsValidation.handleSubmit()}
//       >
//         Transfer Funds
//       </Button>
//     </div>
//   );
// }
import React from 'react';

export default function TransferFunds() {
  return <div>index</div>;
}
