import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../AppPicker';
import { ErrorMessage } from '.';

const AppFormPicker = ({ items, name, numColumns, placeholder, PickerItemComponent, width }) => {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numColumns={numColumns}
        onSelectedItem={item => setFieldValue(name, item)}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
