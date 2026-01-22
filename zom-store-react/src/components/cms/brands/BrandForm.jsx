import { useState, useEffect, useContext } from "react";
import useBrands from "./hooks/useBrands";
import Button from "../common";
//Props
//   - brand: Existing brand object for editing (null/undefined for creating new)
//   - onSubmit: Function to call with form data when submitting
//   - onCancel: Function to call when user cancels

function BrandForm({ brand, onSubmit, onCancel }) {
  //Form data
  //Set it with existing data if is eidt or empty strings if creating
  const [formData, setFormData] = useState({
    id: brand?.id || "",
    name: brand?.name || "",
    description: brand?.description || "",
    slug: brand?.slug || "",
    country: brand?.slug || "",
  });

  //Store errors messages
  const [errors, setErrors] = useState({});

  //Use brands for states
  //Load brand data
  useEffect(() => {
    if (id) {
      useBrands.fetchBrand(id);
    }
  }, [id]);

  //Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      useBrands.updateBrand(id, formData);
    } else {
      useBrands.createBrand(formData);
    }
  };

  const handleChange = (event) => {
    //Extract field name and new value from event
    const { name, value } = event.target;
    // Update form data state - copy existing data and update changed field

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Brand Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange} // Update state on change
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            errors.name ? "border-red-500" : "border-gray-300" // Red border if error
          }`}
          placeholder="e.g. ,Nike,Adidas"
        />
        {/* Show error message if exists */}
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border-red-500" : "border-gray-300" // Red border if error
            }`}
            placeholder="Brief description"
          />
          {/* Show error message if exists */}
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {" "}
            Slug
          </label>
          <input
            type="text"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.slug ? "border-red-500" : "border-gray-300" // Red border if error
            }`}
            placeholder="slug"
          />
          {errors.slug && <p>{errors.slug}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.country ? "border-red-500" : "border-gray-300" // Red border if error
            }`}
            placeholder="Country"
          />
          {errors.country && <p>{errors.country}</p>}
        </div>

        {/*ACtion buttons */}

        <div className="flex gap-3 justify-end mt-6">
          {/*Call Button complement*/}
          {/* Cancel button */}

          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          {/* Submit button - text changes based on create vs edit mode */}
          <Button onClick={handleSubmit}>
            {brand ? "Update" : "Create"} Brand
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BrandForm;
