package br.com.estudos.paginacao.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.estudos.paginacao.service.PessoaService;

@RestController
@RequestMapping("/pessoa")
@CrossOrigin(origins = "http://localhost:4200")
public class PessoaController {

	@Autowired
	private PessoaService service;

	@GetMapping
	ResponseEntity<?> listaPessoa(@PageableDefault(size = 10, page = 0, sort = { "nome" }) Pageable pagina) {
		return service.listaPessoa(pagina);
	}
}
