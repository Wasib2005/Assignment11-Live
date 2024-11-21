import Form from "../Components/FormComponent/Form";

const UploadFoods = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold mb-10">Upload A New Food</h1>
      <Form isNew={true}/>
    </div>
  );
};

export default UploadFoods;
