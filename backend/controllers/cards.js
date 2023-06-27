const Card = require('../models/card');
const NotFoundError = require('../errors/NotFoundError');
const DeleteCardError = require('../errors/DeleteCardError');

module.exports.getAllCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.send(cards))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(201).send(card))
    .catch(next);
};

module.exports.deleteCard = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      if (card === null) {
        throw new NotFoundError('Передан несуществующий id карточки.');
      } else if (card.owner.toString() !== req.user._id) {
        throw new DeleteCardError('Нельзя удалить карточку другого пользователя.');
      }
      return card.deleteOne();
    })
    .then((card) => res.status(200).send({ data: card }))
    .catch(next);
};

module.exports.likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $addToSet: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (card === null) {
        throw new NotFoundError('Передан несуществующий id карточки.');
      }
      return res.status(200).send(card);
    })
    .catch(next);
};

module.exports.dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(req.params.cardId, { $pull: { likes: req.user._id } }, { new: true })
    .then((card) => {
      if (card === null) {
        throw new NotFoundError('Передан несуществующий id карточки.');
      }
      return res.status(200).send(card);
    })
    .catch(next);
};
