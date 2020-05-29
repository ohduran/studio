import React from "react"
import DefaultLayout from "../layouts"
import "../global.css"

const Item = ({ src, className, alt }) => {
  return (
    <figure className={` ${className}`}>
      <img
        className="h-16 w-16 object-cover rounded-full shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-150"
        src={src}
        alt={alt}
      />
    </figure>
  )
}

const Watch = () => {
  return (
    <DefaultLayout className="bg-gray-400 min-h-screen">
      <div className="w-11/12 mx-auto my-16 rounded-full shadow-xl p-3 bg-gray-500 grid gap-2 grid-cols-6 grid-rows-6">
        <Item
          className="row-start-1 col-start-3"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/a5/a51e/a51e0f29-2dc1-4979-9458-dd87ce0a30a5/1cdc8fc1-f3a3-4713-ae80-535376cb246b_268.jpg"
          alt="Gypsy Family, Palencia - Juan de Echevarría Zuricalday"
        />
        <Item
          className="row-start-2 col-start-2"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/55/5567/5567252a-48a6-4411-bc78-5cd7a81410d6/84cda323-f924-4b8c-9f7f-f0df4f1dee39_268.jpg"
          alt="A Market - Antonio María Fabrés y Costa"
        />
        <Item
          className="row-start-2 col-start-3"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/dc/dcac/dcac7508-0bdb-4b85-ad74-4782c606dd25/9c7f0b1c-a205-4e20-9de5-7e99a7b897cd_268.jpg"
          alt="Mariquiña de Valle-Inclán - Juan de Echevarría Zuricalday"
        />
        <Item
          className="row-start-2 col-start-4"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/d8/d83f/d83f8fb9-7c7e-498c-b340-66eb63d47478/4c48b335-8c16-4dd3-af25-2fe254a77d33_268.jpg"
          alt="Indian Dancers - Eduardo Chicharro y Agüera"
        />
        <Item
          className="row-start-2 col-start-5"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/c6/c6b8/c6b86794-fe75-4173-84dc-6ca1ceab452c/beb6c85f-6315-49fa-9b75-df4a290229e6_268.jpg"
          alt="Aiguablava - Francisco Gimeno Arasa"
        />
        <Item
          className="row-start-3 col-start-1"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/5a/5aa9/5aa92d39-45d3-4f62-adc0-bffbf00c845a/ff65d022-eba1-40be-babf-799d28f51df0_268.jpg"
          alt="Floreal - José Pinazo Martínez"
        />
        <Item
          className="row-start-3 col-start-2"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/bf/bf28/bf28d887-1573-4d1c-aac6-a4af3f0e03ac/bc02afba-f8f5-46bc-aa5d-a7aeb82cad89_268.jpg"
          alt="Self-portrait - Antonio Fillol Granell"
        />
        <Item
          className="row-start-3 col-start-3"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/ba/ba3f/ba3f0d4d-1d2a-4c8e-8e98-3f01b0142522/acda43f9-f8ef-4f03-a225-7ced86e93a57_268.jpg"
          alt="Torre Sola. Montornés - Joaquín Mir y Trinxet"
        />
        <Item
          className="row-start-3 col-start-4"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/46/46a3/46a3a430-83f8-4efb-b8d5-aa6ce6ebfde4/2e868547-737d-4787-adac-89e5a4452b13_268.jpg"
          alt="Asunción Castro Crespo, wife of the painter - Enrique Simonet Lombardo"
        />
        <Item
          className="row-start-3 col-start-5"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/67/676e/676edaca-9a81-455d-b2b1-0c13fe7973f4/0f12c864-097f-41f9-949f-e3a9d9cf0964_268.jpg"
          alt="Ella J. Seligmann - Joaquín Sorolla y Bastida"
        />
        <Item
          className="row-start-3 col-start-6"
          src="https://content1.cdnprado.net/imagenes/Documentos/imgsem/68/6822/6822da59-b964-433d-9548-c9c6fd712043/4b4d9ed3-16d0-4ba7-9d6e-11eeb1a83bf8_268.jpg"
          alt="Consuelo Rocamora Menéndez - Fernando Alberti Barceló"
        />
        <Item
          className="row-start-4 col-start-1"
          src="https://content2.cdnprado.net/imagenes/Documentos/imgsem/c1/c170/c1700846-b1b4-48ca-b8d0-fc292572f434/656e1e6a-892a-4a5b-885b-a8a6d54e5041_268.jpg"
          alt="The Guadarrama - Aureliano de Beruete"
        />
        <Item
          className="row-start-4 col-start-2"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/ea/ea26/ea26970f-db3d-4fce-bdad-8ae423d62aad/803df694-f06e-4cdd-bc18-bad485365d43_268.jpg"
          alt="The Wall of El Pardo - Aureliano de Beruete"
        />
        <Item
          className="row-start-4 col-start-3"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/53/5378/537851be-a29e-4bba-9ac0-013ee22fdac1/6745893d-3ba5-4abf-9c74-f19963b01487_268.jpg"
          alt="Self-portrait - Juan Antonio Benlliure y Gil"
        />
        <Item
          className="row-start-4 col-start-4"
          src="https://content1.cdnprado.net/imagenes/Documentos/imgsem/1a/1ad3/1ad311e6-9684-4abe-8173-c057cbf1d0b3/a9821083-a03f-4926-ab22-76fc858da955_268.jpg"
          alt="Landscape, El Pardo - Juan Antonio Benlliure y Gil"
        />
        <Item
          className="row-start-4 col-start-5"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/8b/8b91/8b919982-0b0e-4066-98b9-3cc5a8affc2d/25c7517a-5e93-4c29-b8ac-e30a9a4184b1_268.jpg"
          alt="Self-portrait - Enrique Simonet Lombardo"
        />
        <Item
          className="row-start-5 col-start-2"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/42/4288/42880e55-d38c-4af1-81fd-a0b78ae82e06/1ebe43e3-0404-4472-a15c-6f8e8450f8ee_268.jpg"
          alt="The Baptismal procession of Prince Juan, son of the Catholic Kings, through the streets of Seville - Francisco Pradillla y Ortiz"
        />
        <Item
          className="row-start-5 col-start-3"
          src="https://content.cdnprado.net/imagenes/Documentos/imgsem/83/8343/83437d9d-29f5-4c18-9ee6-5b198b85574c/74da2b9e-7fa8-486d-b280-74bdcabe1384_268.jpg"
          alt="Cuenca from Patio del Cuarterón - Aureliano de Beruete"
        />
        <Item
          className="row-start-5 col-start-4"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/a3/a33d/a33dcabc-cdc2-48e1-8a73-73816e7f0b22/26a0a1b1-802b-4d81-835c-d521504745f3_268.jpg"
          alt="The Guadarrama from the Plantío de los Infantes - Aureliano de Beruete"
        />
        <Item
          className="row-start-5 col-start-5"
          src="https://content1.cdnprado.net/imagenes/Documentos/imgsem/e1/e117/e1170a85-7a54-4ee5-b00f-a960d0a71637/8d5b14dc-6328-4334-bac6-8dc940a096f8_268.jpg"
          alt="The Banks of the Manzanares in the Fall - Aureliano de Beruete"
        />
        <Item
          className="row-start-6 col-start-3"
          src="https://content2.cdnprado.net/imagenes/Documentos/imgsem/ed/edd7/edd7a202-c069-49f1-a3f4-eacf9b4022c2/5dad1f45-d0e5-452f-b47d-771282596cbb_268.jpg"
          alt="Boys on the Beach - Joaquín Sorolla y Bastida"
        />
        <Item
          className="row-start-6 col-start-4"
          src="https://content3.cdnprado.net/imagenes/Documentos/imgsem/32/3275/3275785d-0451-48ba-b520-7481edc61e19/5ba8418c-3d7a-4eb4-b009-8e8d72aae7c1_268.jpg"
          alt="View of Madrid from the Meadow of San Isidro"
        />
      </div>
    </DefaultLayout>
  )
}

export default Watch
