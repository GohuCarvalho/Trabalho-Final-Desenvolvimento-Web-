import React, { useState, useEffect } from "react";
import {
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ResultAlert
} from "./styles";

export const CalculadoraModal = ({ isOpen, onClose, totalMinutes, mediaType }) => {
    const [hoursPerDay, setHoursPerDay] = useState(2);
    const [daysPerWeek, setDaysPerWeek] = useState(7);
    const [resultDays, setResultDays] = useState(null);

    const calculateTime = () => {
        const minutesPerWeek = hoursPerDay * 60 * daysPerWeek;

        if (minutesPerWeek <= 0) {
            setResultDays("Por favor, defina horas e dias válidos.");
            return;
        }

        const totalDays = (totalMinutes / minutesPerWeek) * 7;

        if (totalDays > 0) {
            if (totalDays < 7) {
                setResultDays(`Você terminará em aproximadamente ${totalDays.toFixed(1)} dias.`);
            } else if (totalDays < 30) {
                setResultDays(`Você terminará em aproximadamente ${Math.ceil(totalDays / 7)} semanas.`);
            } else {
                const totalMonths = totalDays / 30;
                setResultDays(`Você terminará em aproximadamente ${totalMonths.toFixed(1)} meses.`);
            }
        } else {
            setResultDays("Nenhum item na sua lista para calcular.");
        }
    };

    useEffect(() => {
        if (isOpen) {
            setResultDays(null);
            calculateTime();
        }
    }, [isOpen, totalMinutes, hoursPerDay, daysPerWeek]);

    if (!isOpen) return null;

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ModalHeader>
                    <h5>Calculadora de Maratona - {mediaType === "movie" ? "Filmes" : "Séries"}</h5>
                    <button onClick={onClose}>×</button>
                </ModalHeader>

                <ModalBody>
                    <p>
                        Tempo total de {mediaType === "movie" ? "filmes" : "séries"} na sua lista:{" "}
                        <strong>{totalMinutes} minutos</strong>.
                    </p>

                    <div className="mb-3">
                        <label htmlFor="hours">Horas de dedicação por dia:</label>
                        <input
                            id="hours"
                            type="number"
                            min="1"
                            max="24"
                            value={hoursPerDay}
                            onChange={(e) =>
                                setHoursPerDay(Math.max(1, Math.min(24, parseInt(e.target.value) || 0)))
                            }
                            onBlur={calculateTime}
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="days">Dias de dedicação por semana:</label>
                        <input
                            id="days"
                            type="number"
                            min="1"
                            max="7"
                            value={daysPerWeek}
                            onChange={(e) =>
                                setDaysPerWeek(Math.max(1, Math.min(7, parseInt(e.target.value) || 0)))
                            }
                            onBlur={calculateTime}
                        />
                    </div>

                    {resultDays && <ResultAlert>{resultDays}</ResultAlert>}
                </ModalBody>

            
            </ModalContent>
        </ModalOverlay>
    );
};
