package br.com.estudos.paginacao.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.estudos.paginacao.repository.PessoaRepository;

@Service
public class PessoaService {

	@Autowired
	PessoaRepository pessoaRepo;

	public PessoaService() {
	}

	public ResponseEntity<?> listaPessoa(Pageable pagina) {

		return ResponseEntity.status(HttpStatus.OK).body(pessoaRepo.findAll(pagina));
	}

}
