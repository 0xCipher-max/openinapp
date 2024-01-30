const EmptyPage = () => {
  return (
    <section className="grid place-items-center h-screen ">
      <div className="">
        <img
          src="/public/assets/workingOn.png"
          alt="Empty State"
          width="500"
          height="500"
        />
        <p className=" text-center mt-5 font-medium "> Working on it ... </p>
      </div>
    </section>
  );
};

export default EmptyPage;
