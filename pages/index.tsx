import Button from "@/components/ui/Button/Button";

const HomePage = () => {
  return (
    <>
      <Button
        onClick={() => {
          console.log("Dodaje przychod");
        }}
        label={"Dodaj przychod"}
      />

      <Button
        modifier="outline"
        onClick={() => {
          console.log("Dodaje wydatek");
        }}
        label={"Dodaj wydatek"}
      />
    </>
  );
};

export default HomePage;
