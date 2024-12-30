
import Button from "@components/ui/Button";
import InputGroup from "@components/ui/InputGroup.astro";
import InputText from "@components/ui/InputText.astro";


const AccessBox = () => {
  const handleOnClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="accessBox">
      <form>
        <h1>Acceso actividades</h1>
        <InputGroup label="Código de acceso">
          <InputText
            id="access_hash"
            name="access_hash"
            placeholder="Ejemplo: 434454"
          />
        </InputGroup>
        <Button type="submit" onClick={handleOnClick}>Acceder</Button>
      </form>
    </div>
  );
}

export default AccessBox;

/*
<style>
  .accessBox {
    background - color: #fff;
  width: 90vw;
  border-radius: 12px;
  padding: 30px;
  @media screen and (min-width: 768px) {
    max - width: 350px;
    }
  }

  h1 {
    margin: 0 0 2rem;
  }
</style>
*/
