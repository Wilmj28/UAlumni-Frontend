
import NavBar from "../../components/Navbar";
import { Text, Stack, Box, Image, Flex} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import EgresadosFoto from '../../images/egresados.jpg';
import EgresadosLanding from '../../images/egresadosLanding.jpg';
import ReclutadoresLanding from '../../images/reclutadoreslanding.jpg';
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <img src={EgresadosFoto} alt="Egresados" width="100%" height="auto" />
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text fontSize="4xl" textAlign="center" as="b" paddingTop="40px">
          ¿QUIÉN SOY?
        </Text>
        <Stack direction="row" justifyContent="space-evenly" paddingTop="40px">
          <Box
            boxSize="sm"
            display="flex"
            justifyItem="center"
            flexDirection="column"
          >
            <Image src={EgresadosLanding} alt="egresadosLanding" />
            <Button
              backgroundColor="#007935"
              color="white"
              _hover={{ bg: "#025024" }}
              size="md"
              marginTop="20px"
              paddingTop="10px"
              paddingBottom="10px"
            >
              SOY EGRESADO
            </Button>
          </Box>
          <Box
            boxSize="sm"
            display="flex"
            justifyItem="center"
            flexDirection="column"
          >
            <Image src={ReclutadoresLanding} alt="reclutadoresLanding" />
            <Button
              backgroundColor="#007935"
              color="white"
              _hover={{ bg: "#025024" }}
              size="md"
              marginTop="20px"
              paddingTop="10px"
              paddingBottom="10px"
            >
              SOY RECLUTADOR
            </Button>
          </Box>
        </Stack>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#F5F5F5",
          marginTop: "120px",
          paddingBottom: "40px",
        }}
      >
        <Text fontSize="4xl" textAlign="center" as="b" paddingTop="40px">
          ¿DE QUÉ CARRERA ES EL PROFESIONAL QUE BUSCAS?
        </Text>
        <Stack
          p={{ base: 4, md: "20 20 10 20" }}
        >
          <Flex direction="row" justifyContent="center" wrap="wrap">
            <Box my={2} mx={8}>
              <Button
                backgroundColor="#37B4E3"
                color="white"
                _hover={{ bg: "#247390" }}
                size="md"
              >
                ADMINISTRACIÓN
              </Button>
            </Box>
            <Box my={2} mx={8}>
              <Button
                backgroundColor="#37B4E3"
                color="white"
                _hover={{ bg: "#247390" }}
                size="md"
              >
                COMUNICACIÓN SOCIAL
              </Button>
            </Box>
            <Box my={2} mx={8}>
              <Button
                backgroundColor="#37B4E3"
                color="white"
                _hover={{ bg: "#247390" }}
                size="md"
              >
                CONTADURÍA
              </Button>
            </Box>
            <Box my={2} mx={8}>
              <Button
                backgroundColor="#37B4E3"
                color="white"
                _hover={{ bg: "#247390" }}
                size="md"
              >
                DERECHO
              </Button>
            </Box>
            <Box my={2} mx={8}>
              <Button
                backgroundColor="#37B4E3"
                color="white"
                _hover={{ bg: "#247390" }}
                size="md"
              >
                EDUCACIÓN
              </Button>
            </Box>
          </Flex>
        </Stack>

        <Stack
          p={{ base: 4, md: "20 20 10 20" }}
        >
          <Flex direction="row" justifyContent="center" wrap="wrap">
            <Box my={2} mx={8}>
              <Button
                backgroundColor="#37B4E3"
                color="white"
                _hover={{ bg: "#247390" }}
                size="md"
              >
                INGENIERÍA CIVIL
              </Button>
            </Box>
            <Box my={2} mx={8}>
              <Button
                backgroundColor="#37B4E3"
                color="white"
                _hover={{ bg: "#247390" }}
                size="md"
              >
                INGENIERÍA INDUSTRIAL
              </Button>
            </Box>
            <Box my={2} mx={8}>
              <Button
                backgroundColor="#37B4E3"
                color="white"
                _hover={{ bg: "#247390" }}
                size="md"
              >
                INGENIERÍA INFORMÁTICA
              </Button>
            </Box>
            <Box my={2} mx={8}>
              <Button
                backgroundColor="#37B4E3"
                color="white"
                _hover={{ bg: "#247390" }}
                size="md"
              >
                RELACIONES INDUSTRIALES
              </Button>
            </Box>
          </Flex>
        </Stack>
      </div>

      <Footer />
    </div>
  );
}
export default LandingPage;