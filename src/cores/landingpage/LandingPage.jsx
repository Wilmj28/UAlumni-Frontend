
import NavBar from "../../components/Navbar";
import { Text, Stack, Box, Image} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import EgresadosFoto from '../../images/egresados.jpg';
import EgresadosLanding from '../../images/egresadosLanding.jpg';
import ReclutadoresLanding from '../../images/reclutadoreslanding.jpg';
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div>
      <NavBar/>  
      <img src={EgresadosFoto} alt="Egresados" width="100%" height="auto"/>
      <div style= {{width:'100%',
                    backgroundColor:'white',
                    display:'flex',
                    justifyContent:'center',
                    flexDirection:'column'} 
                    }>
              <Text fontSize='5xl' textAlign='center' as='b'paddingTop='40px'>¿QUIÉN SOY?</Text>
              <Stack direction='row' justifyContent='space-evenly' paddingTop='40px'>
                  <Box boxSize='sm' display='flex' justifyItem='center' flexDirection='column'>
                  <Image src={EgresadosLanding} alt='egresadosLanding' />
                  <Button backgroundColor='#007935'color='white' _hover={{ bg:'#025024'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    SOY EGRESADO
                  </Button>
                  </Box>
                  <Box boxSize='sm' display='flex' justifyItem='center' flexDirection='column'>
                  <Image src={ReclutadoresLanding} alt='reclutadoresLanding' />
                  <Button backgroundColor='#007935'color='white' _hover={{ bg:'#025024'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    SOY RECLUTADOR
                  </Button>
                </Box>
              </Stack>
      </div>

      <div style={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'center',
                    flexDirection:'column',
                    backgroundColor:'#F5F5F5',
                    marginTop:'120px',
                    paddingBottom:'80px'
                   }}>
              <Text fontSize='5xl' textAlign='center' as='b' paddingTop='40px'>¿DE QUÉ CARRERA ES EL PROFESIONAL QUE BUSCAS?</Text>
              <Stack direction='row' paddingLeft='180px' paddingRight='180px' marginTop='20px'>
                  <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    width:'100%'
                  }}> 
                  <Button backgroundColor='#37B4E3'color='white' _hover={{ bg:'#247390'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    ADMINISTRACIÓN
                  </Button>
                  <Button backgroundColor='#37B4E3'color='white' _hover={{ bg:'#247390'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    COMUNICACIÓN SOCIAL
                  </Button>
                  <Button backgroundColor='#37B4E3'color='white' _hover={{ bg:'#247390'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    CONTADURÍA
                  </Button>
                  <Button backgroundColor='#37B4E3'color='white' _hover={{ bg:'#247390'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    DERECHO
                  </Button>
                  <Button backgroundColor='#37B4E3'color='white' _hover={{ bg:'#247390'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    EDUCACIÓN
                  </Button>
                  </div>

              </Stack>

              <Stack direction='row' paddingLeft='180px' paddingRight='180px'>
                  <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent: 'space-between',
                    width:'100%'
                  }}> 
                  <Button backgroundColor='#37B4E3'color='white' _hover={{ bg:'#247390'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    INGENIERÍA CIVÍL
                  </Button>
                  <Button backgroundColor='#37B4E3'color='white' _hover={{ bg:'#247390'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    INGENIERÍA INDUSTRIAL
                  </Button>
                  <Button backgroundColor='#37B4E3'color='white' _hover={{ bg:'#247390'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    INGENIERÍA INFORMÁTICA
                  </Button>
                  <Button backgroundColor='#37B4E3'color='white' _hover={{ bg:'#247390'}} size='lg' marginTop='20px' paddingTop='10px' paddingBottom='10px'>
                    RELACIONES INDUSTRIALES
                  </Button>
                  </div>

              </Stack>
      </div>
      
  
      <Footer/>

    </div>
  );
}
export default LandingPage;