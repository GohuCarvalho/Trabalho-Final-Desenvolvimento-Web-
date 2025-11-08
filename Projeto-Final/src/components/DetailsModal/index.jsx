import { Link } from "react-router-dom";
import { WatchListContext } from "../../contexts/WatchListContext";
import { useContext } from "react";
import { ActionButton } from "../Button";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Poster,
  Title,
  InfoText,
  Actions,
} from "./styles";


export function DetailsModal({ item, onClose }) {
  if (!item) return null;
  
  const { watchList, addToWatchList } = useContext(WatchListContext);
  const alreadyAdded = watchList.some((m) => m.id === item.id);



  const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const imageUrl = item.poster_path ? `${TMDB_IMAGE_BASE_URL}${item.poster_path}` : "";
  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>✕</CloseButton>
        <Poster src={imageUrl} alt={title} />
        <Title>{title}</Title>
        <InfoText><strong>Sinopse:</strong> {item.overview}</InfoText>
        <InfoText><strong>Lançamento:</strong> {releaseDate}</InfoText>
        <InfoText><strong>Avaliação:</strong> {item.vote_average?.toFixed(1) || "N/A"}</InfoText>
    <Actions>
          <ActionButton onClick={() => addToWatchList(item)} disabled={alreadyAdded}>
              {alreadyAdded ? "Já na WatchList" : "Adicionar à WatchList"}
          </ActionButton>
        </Actions>
      </ModalContent>
    </ModalOverlay>
  );
}
